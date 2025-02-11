import CameraController from './CameraController'
import Plane from './Plane'
import PlayerUnits from './PlayerUnits'
import { EnemyUnits } from './Units'

function Scene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Plane />
            <PlayerUnits />
            <EnemyUnits />
            <CameraController />
        </>
    )
}

export default Scene