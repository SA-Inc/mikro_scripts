'use strict';

class SetOperations {
   union(setA, setB) {
      return new Set([...setA, ...setB]);
   }

   intersection(setA, setB) {
      return new Set([...setA].filter(value => setB.has(value)));
   }

   difference(setA, setB) {
      return new Set([...setA].filter(value => !setB.has(value)));
   }

   symetric(setA, setB) {
      return new Set([...setA].filter(value => !setB.has(value)).concat([...setB].filter(value => !setA.has(value))));
   }
}
