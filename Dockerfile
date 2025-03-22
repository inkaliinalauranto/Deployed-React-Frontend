# Käytetään virallista Node.js-runtimea pohja-imagena
FROM node:22 AS build

# Määritellään työhakemistosijainti kontissa: 
WORKDIR /app

# Kopioidaan kaikki tiedostot, jotka alkavat sanalla package ja päättyvät 
# .json-päätteeseen kontin työhakemistoon:
COPY package*.json ./

# Asennetaan riippuvuudet
RUN npm install

# Kopioidaan kaikki tiedostot konttiin
COPY . ./

# Koostetaan React-sovellus tuotantoon:
RUN npm run build

# Ei käytetä Alpine-jakeluun pohjautuvaa imagea tuotantopalvelimen 
# määrittelyssä, sillä silloin hakemisto-oikeuksiin olisi tehtävä muutoksia. 
# FROM nginx:alpine

# Käytetään sen sijaan Nginxin epävirallista tuotantopalvelinta:
FROM nginxinc/nginx-unprivileged

# Kopioidaan React-sovelluksen koonti Nginx-palvelimen hakemistoon:
COPY --from=build /app/dist /usr/share/nginx/html

# Kerrotaan portti, jonka Nginx-palvelin kuuntelee:
EXPOSE 8080

# Käynnistetään Nginx-palvelin, kun kontti käynnistetään:
CMD ["nginx", "-g", "daemon off;"]