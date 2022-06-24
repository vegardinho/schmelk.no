#!/usr/bin/env python3

from dateutil.relativedelta import *
from dateutil.easter import *
from dateutil.rrule import *
from dateutil.parser import *
from datetime import *
import urllib.request as url
from bs4 import BeautifulSoup

import sys

forrige_aar = 0
forrige_sem = 0
dette_aar = 0
dette_sem = 0

MAKS_PGS = 250

maaneder = {
    "januar": "01",
    "februar": "02",
    "mars": "03",
    "april": "04",
    "mai": "05",
    "juni": "06",
    "juli": "07",
    "august": "08",
    "september": "09",
    "oktober": "10",
    "november": "11",
    "desember": "12"
}

args = "Kunne ikke lese argumenter."
syntaks =   """\nSyntaks: <film/ku> <fra-dato> [<til-dato>, bruker dagens dato hvis ikke oppgitt] 
\nEks: "ku 21", "film 17.09.21 12.12.21\""""

def main():
    if len(sys.argv) < 3:
        print(args)
        print(syntaks)
        return

    start_dato = sys.argv[2]
    if len(sys.argv) == 3:
        slutt_dato = date.today().strftime("%d.%m.%Y")
    else:
        slutt_dato = sys.argv[3]

    if sys.argv[1] == "film":
        lenke = 'https://samfundet.no/arrangement/arkivsok?event_area=&event_type=movie&page='
        type_arr = "Filmklubbvisninger"
        film = True
    elif sys.argv[1] == "ku":
        lenke = "https://samfundet.no/arrangement/arkiv?page=" 
        type_arr = "KU-arrangementer"
        film = False
    else:
        print(args)
        print(syntaks)
        return

    lag_oversikt(start_dato, slutt_dato, lenke, type_arr, film)

def lag_oversikt(start_dato, slutt_dato, lenke, type_arr, film):
    try:
        bruker_tid = TimeObject(start_dato, slutt_dato)
    except:
        print("ERROR: Ugyldig datoformat (\"{} {}\")".format(start_dato, slutt_dato))
        print(syntaks)
        return

    print("Finner {} for perioden {}-{}".format(type_arr, bruker_tid.hent_fra_dato(), bruker_tid.hent_til_dato()))
    filnavn = "arr.txt"

    not_done = True
    side_tall = 1

    f = open(filnavn, 'w+')
    f.write("Arrangement i perioden {}-{}\n\n".format(bruker_tid.hent_fra_dato(),
        bruker_tid.hent_til_dato()))

    print("Skriver til fil \"{}\"".format(filnavn))

    while not_done:
        samf_lenke = lenke + str(side_tall)
        arr_igjen =  scrape_side(samf_lenke, bruker_tid, f, film)
        side_tall += 1


        if arr_igjen == False or side_tall > MAKS_PGS:
            not_done = False
            if side_tall > MAKS_PGS:
                print("Nådd maksimumsgrense for antall parsede sider ({})".format(MAKS_PGS))
    f.close()

    print("Filskriving vellykket")

def scrape_side(lenke, bruker_tid, fil, film):
    samf_arr = url.urlopen(lenke)
    suppe = BeautifulSoup(samf_arr, 'html.parser')

    klasse = suppe.find(class_="event-group")
    arr = klasse.find('tbody').find_all('tr')

    for element in arr:
        kol = element.find_all('td')
        type_arr = kol[2].string
        arrangoer = kol[3].string
        dato = kol[1].string

        try:
            dato = nytt_format(dato)
            dato_obj = til_dato_obj(dato)
            før_slutt = bruker_tid.før_slutt(dato_obj)
            etter_start = bruker_tid.etter_start(dato_obj)
        except:
            print(e)
            print("ERROR: noe gikk galt. Hopper til neste element")
            continue

        if før_slutt == False:
            continue
        elif etter_start == False:
            return False

        oppdater_semester(fil, dato_obj)

        if arrangoer == "Kulturutvalget" and før_slutt:
            if not (film == False and type_arr == "Film"):
                navn_lenke = lag_lenke(kol, film)
                fil.write("{} {}\n\n".format(dato[:-5], navn_lenke))

    return True

def lag_lenke(kol, film):
    navn = kol[0].string
    lenke = kol[0].find('a').get('href')
    lenke = "https://www.samfundet.no" + lenke

    navn = navn.replace("m/", "med ")
    navn = navn.replace("[", "(")
    navn = navn.replace("]", ")")
    navn = navn.replace("?", "")
    navn = navn.replace("//", "-")
    navn = navn.replace("/", "")
    navn = navn.replace("’", "")
    navn = navn.replace("´", "")
    navn = navn.replace("!", "")
    navn = navn.replace("–", "-")
    navn = navn.replace("\"", "")
    navn = navn.replace("“", "")
    navn = navn.replace("”", "")
    navn = navn.replace("™", "")
    navn = navn.replace("&", "and")

    indeks = navn.find(":");
    navn_lenke = ""

    if indeks == -1:
        navn_lenke = "[{} | {}]".format(navn, lenke)
    elif navn[indeks+1].isdigit():
        navn = navn.replace(":", ".")
        navn_lenke = "[{} | {}]".format(navn, lenke)
    else:

        tittel = navn[indeks+2:]
        tittel = tittel.replace(":", ",")

        navn = navn[:indeks+1]

        navn_lenke = "{} [{} | {}]".format(navn[:indeks+1], tittel, lenke)

    return navn_lenke



def oppdater_semester(fil, dato_obj):
    global forrige_sem
    global forrige_aar
    global dette_aar
    global dette_sem

    dette_aar = dato_obj.year
    if dato_obj.month <= 6:
        dette_sem = 0
    else:
        dette_sem = 1

    if dette_sem != forrige_sem or dette_aar != forrige_aar:
        if dette_sem == 1:
            sem_str = "Høstprogram"
        else:
            sem_str = "Vårprogram"
        fil.write("\n!!{} {}\n\n".format(sem_str, dette_aar))

        forrige_aar = dette_aar
        forrige_sem = dette_sem

def nytt_format(dato_streng):
    str_list = dato_streng.split()

    dag = str_list[0][:-1]
    if len(dag) == 1:
        dag = "0" + dag

    dato = "{}.{}.{}".format(dag, maaneder[str_list[1]], str_list[2][:-1])
    return dato

def til_dato_obj(dato):
    try:
        dato = parse(dato, dayfirst=True)
    except ValueError:
        print("ERROR: Kunne ikke behandle datostreng \"{}\"".format(dato_streng))
    return dato

class TimeObject:
    def __init__(self, fra_streng, til_streng):
        try:

            if fra_streng.isdigit():
                self.fra_dato = parse("01.01."+fra_streng, dayfirst=True)
            else:
                self.fra_dato = parse(fra_streng, dayfirst=True)

            if til_streng.isdigit():
                self.til_dato = parse("31.12."+til_streng, dayfirst=True)
            else:
                self.til_dato = parse(til_streng, dayfirst=True)

            self.__sjekk_til_dato()
        except:
            print(e)

    def __sjekk_til_dato(self):
        now = datetime.now()
        diff = relativedelta(self.til_dato, now)

        if self.til_dato > now:
            print("Du har valgt en til-dato som ikke har funnet sted enda. Endrer til-dato til " 
                    "dagens dato ({}.{}.{})".format(now.day, now.month, now.year))
            self.til_dato = now;

    def hent_til_dato(self):
        return "{}.{}.{}".format(self.til_dato.day, self.til_dato.month, self.til_dato.year)

    def hent_fra_dato(self):
        return "{}.{}.{}".format(self.fra_dato.day, self.fra_dato.month, self.fra_dato.year)

    def før_slutt(self, annen_dato):
        try:
            if annen_dato > self.til_dato:
                return False
        except:
            print(e)

        return True

    def etter_start(self, annen_dato):
        try:
            if annen_dato < self.fra_dato:
                return False
        except:
            print(e)
        return True

main()
