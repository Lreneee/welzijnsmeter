<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ThemeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $themes = array(
            0 =>
                array(
                    'title' => 'Sociaal netwerk',
                    'header' => 'Hoe tevreden bent u over uw sociale netwerk? ',
                    'description' => 'De mate waarin u naar tevredenheid met mensen een sociale relatie onderhoudt en/of activiteiten onderneemt. Denk hierbij aan het hebben van een (online) goede/betekenisvolle band/relatie met:',
                    'image' => 'https://images.unsplash.com/photo-1513159446162-54eb8bdaa79b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
                    'visible' => true,
                    'note1' => 'Familie;',
                    'note2' => 'Vrienden;',
                    'note3' => 'Buren;'
                ),
            1 =>
                array(
                    'title' => 'Woning',
                    'header' => 'Woont u prettig?',
                    'description' => 'Het leven in een woning die nu geschikt is maar ook eenvoudig geschikt te maken is voor bewoning tot op hoge leeftijd. Het gaat hierbij om de leefbaarheid en voorzieningen voor zowel binnenshuis als de directe omgeving eromheen. Denk hierbij aan: ',
                    'image' => 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80',
                    'visible' => true,
                    'note1' => 'Kunt u hier nu en in de toekomst prettig zelfstandig leven; ',
                    'note2' => 'Sluit uw huis en de buurt nog aan bij uw levensfase; ',
                    'note3' => 'Is de woning veilig en toegankelijk of hiervoor simpel aan te passen; '
                ),
            2 =>
                array(
                    'title' => 'Zelfredzaamheid',
                    'header' => 'Of u alles nog zelf kunt, zonder hulp van anderen. ',
                    'description' => 'Het vermogen van mensen om onafhankelijk te leven zonder (professionele) ondersteuning en zorg (door anderen). Denk hierbij onder andere aan:',
                    'image' => 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
                    'visible' => true,
                    'note1' => 'Uw financiële zaken: het zelfstandig bijhouden van uw financiële administratie en het zelf digitaal regelen van bankzaken;',
                    'note2' => 'Uw eigen mobiliteit: het zelfstandig in staat zijn om zonder moeite of hulp van anderen uzelf te kunnen verplaatsen;',
                    'note3' => 'Uw huishouden: het zelfstandig kunnen onderhouden van uw huis en tuin.'
              ),
            3 =>
                array(
                    'title' => 'Fysieke gesteldheid',
                    'header' => 'Hoe voelt u zich lichamelijk?',
                    'description' => 'Het lichamelijk welzijn, waarbij u zich goed (genoeg) voelt om deel te nemen aan alle gewenste (fysieke) activiteiten, zonder last te hebben van lichamelijke beperkingen. Denk hierbij onder andere aan:',
                    'image' => 'https://images.unsplash.com/photo-1536408157291-aef6d736e2cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80',
                    'visible' => true,
                    'note1' => 'Het hebben van weinig energie;',
                    'note2' => 'Het ondervinden van klachten in het bewegingsstelsel of uithoudingsvermogen;',
                    'note3' => 'Problemen met zicht, horen of spreken;'

                ),
            4 =>
                array(
                    'title' => 'Levenspartner',
                    'header' => 'Heeft u een fijne levenspartner, of bent u tevreden zonder levenspartner? ',
                    'description' => 'Het hebben van een levenspartner (of levensmaatje, levensgezel), waarmee je je leven deelt, geeft een gevoel van steun, veiligheid, geborgenheid en is van wezenlijk belang doordat interactie uw geest scherp houdt en zingeving stimuleert (geeft meerwaarde). Denk hierbij aan:',
                    'image' => 'https://images.unsplash.com/photo-1625690987114-86f5af994b49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
                    'visible' => true,
                    'note1' => 'Je eenzaam voelen / niet gewenst isolement',
                    'note2' => 'Het missen van een maatje om activiteiten te ondernemen',
                    'note3' => 'Het niet kunnen delen van de dagelijkse beslommeringen'
               ),
            5 =>
                array(
                    'title' => 'Mentale gezondheid',
                    'header' => 'Voelt u zich geestelijk goed? ',
                    'description' => 'De mentale gezondheid (mentaal welzijn) en het blijven ontwikkelen van de geest, levert een positieve bijdrage aan het geluksgevoel. Een fit brein helpt bij het vermijden van stress, depressie, angst, onzekerheid, burn-out of psychische klachten. Denk hierbij aan:',
                    'image' => 'https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
                    'visible' => true,
                    'note1' => 'Je voelt je gestrest, depressief of angstig',
                    'note2' => 'Je bent bang dat je mentale gezondheid met ouderdom achteruit gaat (dementie of alzheimer)',
                    'note3' => 'Je wordt vergeetachtig'
                ),
            6 =>
                array(
                    'title' => 'Zingeving',
                    'header' => 'Voelt u zich nuttig en betekenisvol? ',
                    'description' => 'Het gevoel nuttig en betekenisvol te zijn. De ervaring van het toevoegen van waarde draagt bij aan het geluksgevoel. Denk hierbij aan:',
                    'image' => 'https://plus.unsplash.com/premium_photo-1661306433107-9d4f275b7c80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
                    'visible' => true,
                    'note1' => 'Het nutteloos voelen',
                    'note2' => 'Het niet kunnen delen van kennis en ervaring',
                    'note3' => 'Op afstand van de maatschappij gezet worden (kennis en ervaring van ouderen wordt genegeerd en/of onderschat)'
                ),
            7 =>
                array(
                    'title' => 'Financiën',
                    'header' => 'Heeft u een goed gevoel over uw financiën? ',
                    'description' => 'Het beschikken van voldoende inkomen en/of vermogen om hier uw uitgaven mee te doen. Deze uitgaven kunnen bestaan uit nodige uitgaven en extra’s. Hiervoor kunt u in kaart brengen wat uw financiële situatie nu, straks en later is. Denk hierbij aan:',
                    'image' => 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
                    'visible' => true,
                    'note1' => 'Dat u voldoende middelen hebt om onvoorziene klappen op te vangen, zoals een kapotte wasmachine;',
                    'note2' => 'Dat u voldoende middelen heeft om een comfortabel leven te leiden en bijvoorbeeld om zo vaak op vakantie te gaan als u zou willen;',
                    'note3' => 'Of u anderen kan helpen of bieden wat u hen graag zou willen bieden op financieel vlak;'
                ),
            8 =>
                array(
                    'title' => 'Veiligheid',
                    'header' => 'Voelt u zich veilig in uw alledaagse leven? ',
                    'description' => 'Voelt u zich veilig in uw alledaagse leven? Dit kan in en rondom uw huis zijn, maar ook in het verkeer, externe locaties of online. Denk hierbij aan: ',
                    'image' => 'https://images.unsplash.com/photo-1647940990395-967898eb0d65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80',
                    'visible' => true,
                    'note1' => 'Angst voor inbraak/overval; ',
                    'note2' => 'Ziet u voldoende het gevaar in van (online) oplichtingspraktijken; ',
                    'note3' => 'Zelfvertrouwen in het verkeer, te voet, op de fiets of in de auto; '
                ),
            9 =>
                array(
                    'title' => 'Zorg voor dierbaren',
                    'header' => 'Voelt u zich goed bij het verlenen van zorg aan anderen? ',
                    'description' => 'Belast het u mentaal/fysiek of komt u in tijdsproblemen? Onder zorg verstaan we de (mantel)zorg die u verleent of gaat verlenen aan mensen die belangrijk voor u zijn (zoals ouders, kinderen, partner). Hoe u dit mentaal of fysiek ervaart, of dat eventueel uw en andermans financiën beïnvloedt en of u voldoende tijd heeft hiervoor. Denk hierbij aan: ',
                    'image' => 'https://images.unsplash.com/photo-1490349708435-19d432984978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80',
                    'visible' => true,
                    'note1' => 'Ouders of dierbaren die op u (gaan) rekenen voor zorg en het regelen van diverse (financiële) zaken; ',
                    'note2' => 'Kinderen die langer thuis blijven wonen of terugkeren naar huis door o.a. een krappe woningmarkt; ',
                    'note3' => 'Doordat de zorg vanuit de overheid steeds minder wordt, komt er steeds meer verantwoordelijkheid bij de ‘kinderen van’ of andere dierbaren te liggen; '
                )
        );
        for ($i = 0; $i < sizeOf($themes); $i++) {
            DB::table('theme')->insert([
                'id' => $i + 1,
                'title' => $themes[$i]['title'],
                'header'=> $themes[$i]['header'],
                'description' => $themes[$i]['description'],
                'image' => $themes[$i]['image'],
                'visible' => $themes[$i]['visible'],
                'note1' => $themes[$i]['note1'],
                'note2' => $themes[$i]['note2'],
                'note3' => $themes[$i]['note3']
            ]);
        }
    }
}
