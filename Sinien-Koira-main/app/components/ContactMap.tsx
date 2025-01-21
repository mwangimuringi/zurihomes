import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const defaultCenter = {
  lat: 49.5198605, lng: 17.0856296
}

export default function ContactMap (): JSX.Element {
  const mapStyles = {
    height: '100%',
    width: '100%'
  }

  return (
    <div className="card w-[350px] sm:w-[500px] shadow-xl bg-white">
        <div className='' style={{ height: '570px' }}>
          <LoadScript googleMapsApiKey='AIzaSyDTfDO8K3WJ0fzu2UPGii--OXQxKV0o6iM'>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={14}
              center={defaultCenter}>
              <Marker position={defaultCenter} />
            </GoogleMap>
          </LoadScript>
        </div>

    </div>
  )
}
