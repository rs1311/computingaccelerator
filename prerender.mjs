import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';
import { createElement } from 'react';
import { readFile, writeFile } from 'node:fs/promises';
const server=await createServer({server:{middlewareMode:true}});
try {
const {default:App}=await server.ssrLoadModule('/src/App.jsx');
let html=await readFile('dist/index.html','utf8');
html=html.replace('<div id="root"></div>', '<div id="root">'+renderToString(createElement(App))+'</div>');
const schema={'@context':'https://schema.org','@graph':[
 {'@type':'WebSite','@id':'https://studycomputing.sg/#website',url:'https://studycomputing.sg/',name:'Study Computing',inLanguage:'en-SG'},
 {'@type':'Person','@id':'https://studycomputing.sg/#tutor',name:'Raghav Sriram'},
 {'@type':'Service',name:'H2 Computing tuition',serviceType:'A-Level H2 Computing tuition',provider:{'@id':'https://studycomputing.sg/#tutor'},areaServed:{'@type':'Country',name:'Singapore'},offers:{'@type':'Offer',price:'30',priceCurrency:'SGD',url:'https://studycomputing.sg/#lessons',description:'H2 Computing tuition at S$30 per hour',priceSpecification:{'@type':'UnitPriceSpecification',price:'30',priceCurrency:'SGD',unitText:'hour'}}}
]};
html=html.replace('<!--SCHEMA-->','<script type="application/ld+json">'+JSON.stringify(schema)+'</script>');
await writeFile('dist/index.html',html);
console.log('Pre-rendered landing page and structured data.');
} finally {await server.close();}
