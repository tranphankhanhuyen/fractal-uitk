import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  homeContentData = {
    "title": 'What is Fractal',
    "image": 'what-is-fractal.png',
    "anchor": "what-is-fractal",
    "body":
      `<p>Fractal Therapeutics is a model-based drug discovery and development company, focused on building a pipeline of novel assets in Oncology, Infectious Disease, and Rare Diseases.</p> 

      <p>Our team consists of seasoned pharma R&D executives who have developed and honed a unique approach to drug hunting. This approach- honed over the years in live project settings in big pharma- integrates informatics, mathematical modeling, and simulation platforms tightly with in vivo and clinical pharmacology.</p> 
      
      <p>Fractal’s unique interlocking platforms are focused on providing robust model-based solutions to critical-path questions on the road to new asset creation and development. We are applying our platforms to efficiently build a diverse pipeline of novel investigational agents, spanning a range of modalities. These assets are intended to be partnered, either through sponsored research agreements or commercial deals, at the late preclinical or early clinical stages.</p>`
  }
}