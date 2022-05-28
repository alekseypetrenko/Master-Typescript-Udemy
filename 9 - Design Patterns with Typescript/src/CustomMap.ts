interface Mappable {
  location: {
    lat: number,
    lng: number
  }
}

export class CustomMap {
  private googleMap: google.maps.Map;
  private infoWindow: google.maps.InfoWindow;

  constructor(divId: string){
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0
      }
    });
    this.infoWindow = new google.maps.InfoWindow({
      content: `Hi there`
    })
    
  }

  addMarker(mappable: Mappable): void{
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })

    marker.addListener("click", () => {
      this.infoWindow.open(this.googleMap, marker)
    })
  }
}