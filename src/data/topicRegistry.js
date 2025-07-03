// src/data/topicRegistry.js

// History topics
import howWhenWhere from "./socialscience/class8/history/how-when-where";
import tradeToTerritory from "./socialscience/class8/history/trade-to-territory";
import rulingTheCountryside from "./socialscience/class8/history/ruling-countryside";
import revolt1857 from "./socialscience/class8/history/1857-revolt";

// Geography topics
import agriculture from "./socialscience/class8/geography/agriculture";
import resources from "./socialscience/class8/geography/resources";

// Civics topics
import indianConstitution from "./socialscience/class8/civics/indian-constitution";
import lawAndSocialJustice from "./socialscience/class8/civics/law-and-social-justice";
import publicFacilities from "./socialscience/class8/civics/public-facilities";

// Topic Map
const topicMap = {
  // History
  "how-when-where": howWhenWhere,
  "trade-to-territory": tradeToTerritory,
  "ruling-countryside": rulingTheCountryside,
  "1857-revolt": revolt1857,

  // Geography
  "agriculture": agriculture,
  "resources": resources,

  // Civics
  "indian-constitution": indianConstitution,
  "law-social-justice": lawAndSocialJustice,
  "public-facilities": publicFacilities,
};

export default topicMap;
