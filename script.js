{
    const quotes = [
        "Jeżeli robisz to co łatwe, Twoje życie będzie trudne. Jeśli robisz to co trudne, Twoje życie będzie łatwe. ~ Les Brown",
        "Nie wychowuj swoich dzieci, aby były bogate. Naucz je, aby były szczęśliwe – Więc kiedy dorosną, będą znać wartość rzeczy, a nie ich cenę.	~ Steve Jobs",
        "Nigdy nie rezygnuj z marzenia, tylko dlatego, że zrealizowanie go wymaga czasu. Czas i tak upłynie. ~ Earl Nightingale",
        "Kiedy myślisz, że gorzej już być nie może, zacznij się walić deską po nodze. Zobaczysz jaką poczujesz ulgę gdy przestaniesz.~ Winston Groom",
        "Jeżeli będę zajmował się tym, co myślą głupcy, nie będę miał czasu na to, o czym myślą ludzie inteligentni. ~ Éric-Emmanuel Schmitt",
        "Być kobietą to strasznie trudne zajęcie, bo polega głównie na zadawaniu się z mężczyznami. ~ Joseph Conrad",
        "Co ty myślisz, cwaniaczku?! Że z piątego przykazania możesz sobie zrobić spółkę z ograniczoną odpowiedzialnością?! ~ Jerzy Ryba",
        "Granice? Nigdy żadnej nie widziałem, ale słyszałem, że istnieją w umysłach niektórych ludzi ~ Thor Heyerdahl",
        "Człowiek z no­wymi po­mysłami jest wa­riatem, dopóki nie od­niesie sukcesu. ~ Mark Twain"
    ];
    const getRandomQuote = () => {
      return `${quotes[Math.floor(Math.random() * quotes.length)]}`

    }

    const setRandomQuote = () => {
        document.getElementById("js-generatorAnswer").innerText = getRandomQuote() ;
    };

    const onClickShowQuote = () => {
        const quoteButton = document.querySelector(".js-quoteButton");
        quoteButton.addEventListener("click", setRandomQuote);

    };
    onClickShowQuote();
}