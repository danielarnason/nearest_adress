# Se nærmeste adresse  

Modul til Spatial Suite, som man kan få vist den nærmeste adresse ved det sidste sted man klikkede i kortet. Adressen bliver vist som tekst nede i det højre hjørne af skærmen - normalt ved siden af koordinaterne for musemarkøren og målforholdene (hvis de to moduler er aktiveret).  

Hvis man klikker på teksten, så zoomer kortet ind og viser adressepunktet i 5 sekunder, før det forsvinder igen.

## Installation  

1. Clone eller download det her repo og placer det i _/modules/custom_ folder.
2. Installer modulet ved at tilføje til relevante modulfiler:  
`<module name="nearest_adress" dir="custom/nearest_adress" permissionlevel="public"/>`  
3. Tilføj _nearest_adress_ værktøjet til relevante profiler:  
`<tool ignore="not ModuleDefined('nearest_adress')" module="nearest_adress" name="nearest_adress" panel="bottom-right"/>` 

# Viderudvikling
Hvis du har ønsker eller idéer for, hvad det her skal kunne, så er du velkommen til at skrive til mig på [daarn@slagelse.dk](mailto:daarn@slagelse.dk).  

Du kan også bare oprette et issue her på Github eller forke det her repo og lave en pull request