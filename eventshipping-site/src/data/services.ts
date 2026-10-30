export interface Service {
  slug:string; name:string; short:string; linkLabel:string; icon:string;
  meta:string; intro:string; image:string; alt:string; items:string[];
  detailTitle:string; details:string[];
}
export const services:Service[] = [
  {
    slug:'truck-shipping-1',name:'Truck Shipping',icon:'truck',
    short:'Dedicated trucks, LTL and expedited ground options matched to your freight and schedule.',
    linkLabel:'Explore ground shipping',
    meta:'Explore dedicated truckload, LTL and expedited ground shipping for trade shows, conferences and time-critical events. Call Event Shipping at 800-649-0130.',
    intro:'Across the street or coast to coast. Find the ground service that fits your shipment, your event schedule and your budget.',
    image:'truck-shipping',alt:'Freight truck traveling along a highway at dusk',
    items:['Dedicated truckload & air-ride trailers','Less-than-truckload (LTL)','Express & expedited trucking','Cargo vans, Sprinter vans & straight trucks','Flatbeds & specialized equipment','Time-specific pickups & deliveries'],
    detailTitle:'The right equipment. A coordinated move.',
    details:['From exhibit cases and pallets to oversized crates, our team coordinates a ground service around the weight, dimensions and handling needs of your freight. Dedicated truckload and expedited options are available for shipments with critical deadlines.', 'Need help choosing between LTL and a dedicated vehicle? Share your pickup city, delivery city and event dates. We will discuss the available equipment, transit options and accessorial services with you.'],
  },
  {
    slug:'domestic-shipping',name:'Domestic & Event Shipping',icon:'route',
    short:'One-way, round-trip and show-to-show coordination for the places your events take you.',
    linkLabel:'Plan your event shipment',
    meta:'One-way, round-trip and show-to-show freight shipping to convention centers, hotels, venues and productions. Explore Event Shipping domestic services.',
    intro:'One event or a full calendar. Coordinate your freight to and from convention centers, hotels, production locations and venues across the country.',
    image:'event-cases',alt:'Wooden shipping crates and protective equipment cases ready for transport',
    items:['One-way & round-trip event freight','Show-to-show forwarding','Convention center & hotel deliveries','Shipment intercept & redirection','Short- & long-term storage','Waybills, labels & proof of delivery'],
    detailTitle:'Support for every stop on your calendar.',
    details:['Your shipment does not always go straight home after the show. We coordinate forwarding between events, storage between dates and changes to your route when plans move.', 'Inside delivery, lift-gate service, two-person handling, palletizing and shrink-wrapping can be arranged around your shipment. Tell us about venue requirements, delivery appointments and any after-hours or weekend needs when requesting your quote.'],
  },
  {
    slug:'international-shipping',name:'International Shipping',icon:'world',
    short:'Air cargo and ocean freight options for time-sensitive moves around the world.',
    linkLabel:'Explore air & ocean',
    meta:'Worldwide air and ocean freight for events, exhibitions and time-critical shipments. Explore air charter, express air and ocean container options with Event Shipping.',
    intro:'Take your event freight further. Explore air and ocean services with a team that helps coordinate your shipment around its destination and deadline.',
    image:'air-cargo',alt:'Palletized freight being loaded onto a cargo aircraft',
    items:['Dedicated air charters','Overnight express air service','Second-day air service','Ocean import & export','20- & 40-foot ocean containers','Worldwide door-to-door coordination'],
    detailTitle:'Air when time matters. Ocean when plans allow.',
    details:['For urgent shipments, air cargo options include express services and dedicated aircraft. Share your route and delivery requirements so the team can advise on availability and timing.', 'For shipments with more lead time, ocean import and export services connect ports around the world. Event Shipping represents Airways Freight Corporation for worldwide land, air and sea transportation. Confirm route-specific requirements, documentation and schedules with the team before booking.'],
  },
];
export const homeServices = [
  {name:'Ground & Truck',icon:'truck',short:'Dedicated truckload, LTL and expedited ground. The right equipment for your event deadline.',slug:'truck-shipping-1',linkLabel:'Ground shipping'},
  {name:'Air Cargo',icon:'plane',short:'Express air service and dedicated charters for shipments that need to move quickly.',slug:'international-shipping',linkLabel:'Air shipping'},
  {name:'Ocean Freight',icon:'ship',short:'Worldwide ocean import and export, including 20- and 40-foot container options.',slug:'international-shipping',linkLabel:'Ocean shipping'},
  {name:'Trade Shows & Events',icon:'route',short:'One-way, round-trip and show-to-show moves. From the first pickup to the final return.',slug:'domestic-shipping',linkLabel:'Event logistics'},
  {name:'Special Handling & Storage',icon:'package',short:'White glove, inside delivery, lift gates and storage for freight that needs extra attention.',slug:'domestic-shipping',linkLabel:'Shipping support'},
];
