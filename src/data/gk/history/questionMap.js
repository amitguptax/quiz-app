// data/gk/history/questionMap.js

import indusValley from './ancient/indusValley';
import vedicPeriod from './ancient/vedicPeriod';
import mahajanapadas from './ancient/mahajanapadas';
import mauryaEmpire from './ancient/mauryaEmpire';
import guptaEmpire from './ancient/guptaEmpire';

import delhiSultanate from './medieval/delhiSultanate';
import mughalEmpire from './medieval/mughalEmpire';
import bhaktiSufi from './medieval/bhaktiSufi';
import vijayanagara from './medieval/vijayanagara';
import marathaEmpire from './medieval/marathaEmpire';

import europeArrival from './modern/europeArrival';
import britishRule from './modern/britishRule';
import revolt1857 from './modern/revolt1857';
import freedomMovement from './modern/freedomMovement';
import gandhianMovements from './modern/gandhianMovements';
import quitIndia from './modern/quitIndia';
import independencePartition from './modern/independencePartition';

import gandhi from './personalities/gandhi'; // ✅ correct

import bose from './personalities/bose';
import bhagatSingh from './personalities/bhagatSingh';
import ambedkar from './personalities/ambedkar';
import raniLakshmiBai from './personalities/raniLakshmiBai';
import nehru from './personalities/nehru';

const questionMap = {
     history: {
    personalities: {
      gandhi,
      bose,
      bhagatSingh,
      ambedkar,
      raniLakshmiBai,
      nehru,
    },
},
  ancient: {
    indus_valley: indusValley,
    vedic_period: vedicPeriod,
    mahajanapadas: mahajanapadas,
    maurya_empire: mauryaEmpire,
    gupta_empire: guptaEmpire
  },
  medieval: {
    delhiSultanate: delhiSultanate,
    mughalEmpire: mughalEmpire,
    bhaktiSufi: bhaktiSufi,
    vijayanagara: vijayanagara,
    marathaEmpire: marathaEmpire
  },
  modern: {
    europeArrival: europeArrival,
    britishRule: britishRule,
    revolt1857: revolt1857,
    freedomMovement: freedomMovement,
    gandhianMovements: gandhianMovements,
    quitIndia: quitIndia,
    independencePartition: independencePartition
  },
  
};

export default questionMap;
