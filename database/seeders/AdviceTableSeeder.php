<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdviceTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $advices = array(
            0 => array(
                'theme_name' => 'Sociaal netwerk',
                'image' => 'https://images.unsplash.com/photo-1513159446162-54eb8bdaa79b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
                'header_title' => 'Tips voor het vergroten van uw sociale netwerk:',
                'note1' => 'Doe een test om uw interesses duidelijk te krijgen;',
                'note2' => 'Sluit u aan bij een vereniging die past bij uw interesses, zoals een wandelclub, een koor, een creatieve club, een kookclub, etc.; ',
                'note3' => 'Bezoek (vaker) het lokale buurthuis of de bibliotheek (dit is tegenwoordig vaak een sociale ontmoetingsplek waar je makkelijk naar binnen loopt);',
                'note4' => 'Ga op zoek naar vrijwilligerswerk.',
                'button_link'=>'',
                'button_name'=>'',
            ),
            1 => array(
                'theme_name' => 'Woning',
                'image' => 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80',
                'header_title' => 'Tips om uw woonplezier te verhogen:',
                'note1' => 'Verhuizen naar een wijk waarin u zich meer thuis voelt;',
                'note2' => 'Verhuizen naar een appartement om u te ontzorgen waardoor u ook makkelijker leuke dingen kunt doen;',
                'note3' => 'Het aanpassen van de woning zodat uw slaapkamer en badkamer zich op de begane grond bevinden;',
                'note4' => 'Voor meer informatie over wonen, kan u dit bekijken op Woonz.nl',
                'button_link'=>'https://www.woonz.nl/',
                'button_name'=>'Bekijk hier informatie over Wonen',
            ),
            2 => array(
                'theme_name' => 'Zelfredzaamheid',
                'image' => 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
                'header_title' => 'Tips voor het verbeteren van uw zelfredzaamheid: ',
                'note1' => 'Schakel een (gespecialiseerde) financieel adviseur in;',
                'note2' => 'Een huisrobot voor diverse huishoudelijke taken;',
                'note3' => 'Cursussen voor het leren of verhogen van digitale vaardigheden;',
                'note4' => 'Hulp bij ingewikkelde vragen op het gebied van gemeente en overheid, zoals bij het aanvragen van toeslagen, subsidies, vergunningen, etc.',
                'button_link'=>'',
                'button_name'=>'',
            ),
            3 => array(
                'theme_name' => 'Fysieke gesteldheid',
                'image' => 'https://images.unsplash.com/photo-1536408157291-aef6d736e2cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80',
                'header_title' => 'Tips voor verbetering van uw fysieke gesteldheid:',
                'note1' => 'Aanschaf van bril, gehoorapparaat, elektrische fiets enz.;',
                'note2' => 'Onderzoek naar omgevingsfactoren en oorzaken; ',
                'note3' => 'Schakel een coach/psycholoog in;',
                'note4' => 'Ga naar de huisarts en vraag na of er sprake kan zijn van een erfelijke aandoening, zo kunt u gericht hieraan werken.',
                'button_link'=>'',
                'button_name'=>'',
            ),
            4 => array(
                'theme_name' => 'Levenspartner',
                'image' => 'https://images.unsplash.com/photo-1625690987114-86f5af994b49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
                'header_title' => 'Tips om u beter te voelen bij (het ontbreken van) een levenspartner:',
                'note1' => 'Datingsite voor 50+;',
                'note2' => '(Relatie)therapie; ',
                'note3' => 'Reizen voor alleenstaanden;',
                'note4' => 'Of schaf een huisdier aan (dit kan ook een hulphond, robothuisdier of deelhond/deelhuisdier zijn), deze kan het ontbreken van een levenspartner verzachten.',
                'button_link'=>'',
                'button_name'=>'',
            ),
            5 => array(
                'theme_name' => 'Mentale gezondheid',
                'image' => 'https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
                'header_title' => 'Tips ter verbetering van uw mentale gezondheid:',
                'note1' => 'Zoek een baan/hobby of doe een cursus/vrijwilligerswerk;',
                'note2' => 'Denk na over het inzetten van uw kwaliteiten en ervaringen;',
                'note3' => 'Maak meer gebruik van de digitale wereld, daag uw hersenen uit (luisterboeken, VR reizen, podcasts etc.);',
                'note4' => 'Blijf dagelijks in beweging en slaap voldoende.',
                'button_link'=>'',
                'button_name'=>'',
            ),
            6 => array(
                'theme_name' => 'Zingeving',
                'image' => 'https://plus.unsplash.com/premium_photo-1661306433107-9d4f275b7c80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
                'header_title' => 'Tips voor meer zingeving:',
                'note1' => 'Zoek een (andere) baan/vrijwilligerswerk (voor als u met pensioen bent: er zijn ook uitzendbureaus voor gepensioneerden);',
                'note2' => 'Zet u (fysiek, mentaal of financieel) in voor goede doelen;',
                'note3' => 'Doe een (online) cursus of opleiding (omscholing) om u te verbreden of verdiepen op een ander kennisgebied;',
                'note4' => 'Het opbouwen en gebruiken van een netwerk van vakmensen, vakgenoten, academici.',
                'button_link'=>'',
                'button_name'=>'',
           ),
            7 => array(
                'theme_name' => 'Financiën',
                'image' => 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
                'header_title' => 'Tips ter verbetering van en inzicht in uw financiële situatie van nu, straks en later',
                'note1' => 'Raadpleeg een financiële coach die u persoonlijke adviezen geeft over uw financiën (denk aan het maken van een financiële planning);',
                'note2' => 'Een lijfrenteverzekering om later, naast uw pensioen, voldoende inkomen te hebben;',
                'note3' => 'Een overwaarde hypotheek als u uw koopwoning (bijna) heeft afbetaald. Hiermee krijgt u periodiek extra inkomen en/of een eenmalig bedrag.;',
                'note4' => 'Bekijk uw pensioenoverzicht op Mijnpensioenoverzicht.nl, en bepaal of u tevreden bent over uw pensioenplan (eventueel in overleg met een adviseur).',
                'button_link'=>'',
                'button_name'=>'',
           ),
            8 => array(
                'theme_name' => 'Veiligheid',
                'image' => 'https://images.unsplash.com/photo-1647940990395-967898eb0d65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80 ',
                'header_title' => 'Tips om u veiliger te voelen, zowel mentaal als fysiek:',
                'note1' => 'Robotica en domotica (elektronische snufjes voor uw huis), bijvoorbeeld om te monitoren wie er voor de deur staat of het bedienen van uw licht op afstand;',
                'note2' => 'Een cursus cybersecurity of een cybercoach inhuren;',
                'note3' => 'Anti-inbraakadvies; ',
                'note4' => 'Maak afspraken met buurtgenoten voor sociale controle in de buurt.',
                'button_link'=>'',
                'button_name'=>'',
            ),
            9 => array(
                'theme_name' => 'Zorg voor dierbaren',
                'image' => 'https://images.unsplash.com/photo-1490349708435-19d432984978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80',
                'header_title' => 'Tips om jezelf te ontlasten:',
                'note1' => 'Zoek naar meergeneratie woonvormen, waarbij bijvoorbeeld studenten en ouderen naast elkaar leven ',
                'note2' => 'Het verzekeren van zorg (garantiezorg) die u nu, straks of later nodig gaat hebben. Bijvoorbeeld het inschakelen van een mantelzorgverzekering/-makelaar, zodat u of uw ouder(s) langer thuis kan/kunnen blijven wonen;',
                'note3' => 'Het opbouwen van een netwerk bestaande uit diverse leeftijdsgroepen, om op terug te kunnen vallen;',
                'note4' => 'Leer hoe u (beter) uw grenzen aangeeft.',
                'button_link'=>'',
                'button_name'=>'',
            )
        );
        for ($i = 0; $i < sizeOf($advices); $i++) {
            DB::table('advice')->insert([
                'id' => $i + 1,
                'header_title' => $advices[$i]['header_title'],
                'theme_name' => $advices[$i]['theme_name'],
                'image' => $advices[$i]['image'],
                'note1' => $advices[$i]['note1'],
                'note2' => $advices[$i]['note2'],
                'note3' => $advices[$i]['note3'],
                'note4' => $advices[$i]['note4'],
                'button_link'=>$advices[$i]['button_link'],
                'button_name'=>$advices[$i]['button_name']
            ]);
        }
    }
}
