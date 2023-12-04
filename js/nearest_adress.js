class NearestAdress {
    constructor() {
        this.olMap = spm.getMapControl().map
        this.fetchingData = false
        this.adressElement = document.querySelector('#nearest_adress > a > span')
        this.currentAdresse = null
    }

    async fetchDawaData(x, y) {
        this.fetchingData = !this.fetchingData
        let data = await fetch(`https://api.dataforsyningen.dk/adgangsadresser/reverse?x=${x}&y=${y}&srid=25832&struktur=mini`)
        let response = await data.json()
        this.fetchingData = !this.fetchingData
        this.adressElement.innerHTML = response.betegnelse
        this.currentAdresse = response
        return response.betegnelse
    }
}