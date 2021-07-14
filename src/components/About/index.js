import React from "react";
import {
    AboutUsContent as Biography,
    AboutUsContent as Squad
} from "./AboutUsContent";

export const About = () => {

    return (
        <>
            <Biography
                title="Biografia"
                body={
                    <p>
                        W ciągu ostatnich 15 lat wydaliśmy 10 płyt utrzymanych w bardzo różnorodnej stylistyce. Jako pierwsi na takim poziomie wprowadziliśmy w polskim hip-hopie miękkie brzmienia i miękkie teksty nawiązując swego czasu do klimatów Native Tongues. Od tamtego momentu do dzisiaj stale eksperymentujemy, staramy się jednak by wszystkie nasze produkcje łączył jeden składnik - wysoka jakość i zaangażowanie. Występujemy jako Fisz Emade Tworzywo w szerokim składzie wsparci znakomitymi muzykami. Nasza płyta „Mamut”, wydana w 2014 roku, to jedno z największych dokonań zespołu. Uznana przez wielu dziennikarzy muzycznych za płytę roku, uzyskała status Platynowej Płyty, została również laureatem Fryderyka 2015 w kategorii Album Roku Elektronika/ Indie/Alternatywa. 21 października 2016 roku wydaliśmy płytę „Drony”, która w miesiąc po premierze uzyskała status Złotej Płyty a pół roku później Platynowej. Po udanych trasach koncertowych i świetnie przyjętej płycie „Drony”,  powraciliśmy z albumem „Radar”. Tym razem sięgneliśmy do muzycznego tygla lat 80, inspirując się muzyką disco, ale też rockiem - zarówno klasyczną americaną, jak i krautrockiem. Na albumie można znaleźć utrzymane w klimacie dla lat 80 bity, mocne rockowe solo i syntezatorowe dźwięki, które w rękach znakomitych muzyków zespołu oczarowują swoim niezwykłym klimatem retro.
                    </p>} />
            <Squad
                title="Skład"
                body={
                    <ul>
                        <li>Fisz - wokal</li>
                        <li>Emade - perkusja</li>
                        <li>Michał Sobolewski - gitara</li>
                        <li>Mariusz Obijalski – instrumenty klawiszowe</li>
                        <li>Marcin Pendowski – gitara basowa</li>
                        <li>DJ Eprom – gramofony, sampler</li>
                    </ul>} />
        </>
    )
};