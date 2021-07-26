export default class PlayerService {
    links = {
        "Barcelona": "F9_oIh8QaJw",
        "Lisbon": "MXlFDpaQ1ec",
        "Prague": "tNJTWOUH8JE",
        "Seoul": "Mt4s1Gg2-d4",
        "Singapore": "7xK9jGqfTlA",
        "Hong Kong": "V8nBZbbJePs",
        "Shibuya, Tokyo": "vGTu_h0x1kM",
        "Tochigi, Tokyo": "G_H800ffKb0",
        "Taipei": "eIUTlDEKJXA",
        "Bangkok": "V8e78zOVdTs",
        "Toledo": "Yex5X2p2izk",
        "Makarska": "7mJE7Tb-P4M"
    };
    cities = ["Barcelona", "Lisbon", "Prague", "Seoul", "Singapore", "Hong Kong", "Shibuya, Tokyo",
  "Tochigi, Tokyo", "Taipei", "Bangkok", "Toledo","Makarska"
];
    speed = 1;
    opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
            fs: 0,
            showinfo: 1,
            disableKeyboard: 1,
            controls: 2,
            modestbranding: 0,
            rel: 0,
            mute: 1,
            playsinline: 1,
        },
    };

    selectedCity;
    // setSelectedCity;
    // setOverlayVisible;

    setData(setSelectedCity, setOverlayVisible, selectedCity) {
        this.setSelectedCity = setSelectedCity;
        this.selectedCity = selectedCity;
        this.setOverlayVisible = setOverlayVisible;
    }

    onPlay() {
        console.log(this);
        setTimeout(() => {
            this.setOverlayVisible(false);
        }, 3100)
    }

    onEnd() {
        let nextCityIndex = this.cities.findIndex(city => city === this.selectedCity) + 1
        if (nextCityIndex > this.cities.length) {
            nextCityIndex = 0;
        }
        this.setSelectedCity(this.cities[nextCityIndex])
        this.setOverlayVisible(true);
    }

    cityChanged(event) {
        this.setOverlayVisible(true);
        this.setSelectedCity(event.target.value);
    }

}
