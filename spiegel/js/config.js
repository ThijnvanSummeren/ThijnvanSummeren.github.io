var config = {
    lang: 'nl',
    time: {
        timeFormat: 24
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Eindhoven,Netherlands',
            units: 'metric',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'nl',
            APPID: '48230bb4484186c5de0410781058c8b4'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Goede morgen!',
            'Lekker geslapen?',
            'Hoe is het?',
            'Alles goed?'
        ],
        afternoon: [
            'Goede middag!',
            'Hoe was je dag?',
            'Hoe is het?',
            'Alles goed?'
        ],
        evening: [
            'Goede avond!',
            'Hoe is het?',
            'Alles goed?'
        ]
    },
    calendar: {
        maximumEntries: 10,
        url: "https://p01-calendarws.icloud.com/ca/subscribe/1/n6x7Farxpt7m9S8bHg1TGArSj7J6kanm_2KEoJPL5YIAk3y70FpRo4GyWwO-6QfHSY5mXtHcRGVxYZUf7U3HPDOTG5x0qYnno1Zr_VuKH2M"
    },
    news: {
        feed: 'http://www.rtlnieuws.nl/service/rss/nieuws/index.xml'
    }
}
