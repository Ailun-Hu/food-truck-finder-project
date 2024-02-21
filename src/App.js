import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

function App() {
  const position = { lat: 40.7128, lng: -74.0060 };
  const TestMarker = { lat: 40.7678, lng: -73.9645 };

  return (
    <main>
      <APIProvider apiKey="AIzaSyDpi9UQH0ORtprLFkNfrjFsY_kGYFzyGGQ">
        <div style={{height: "100vh", width: "100%"}}>
          <Map zoom={11} center={position} mapId="3a1d06301097d67f">
            <AdvancedMarker position={TestMarker}>
              {/*<Pin background={"grey"}></Pin>*/}
            </AdvancedMarker>
          </Map>
        </div>
      </APIProvider>
    </main>
  );
}

export default App;
