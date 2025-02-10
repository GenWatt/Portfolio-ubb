import RegisterImage from '../../../assets/images/adrianAuthClient/Register.png'
import ConfirmEmailImage from '../../../assets/images/adrianAuthClient/Confirm email.png'
import RTSVideo from '../../../assets/videos/RTS.mp4'
import AdriantifySongsImage from '../../../assets/images/adriantify/Adriantify-songs.png'
import ListenImage from '../../../assets/images/adriantify/listen.png'
import ListenEverywhere from '../../../assets/images/adriantify/listen-everywhere.png'
import SearchSongImage from '../../../assets/images/adriantify/search.png'
import PlaylistImage from '../../../assets/images/adriantify/playlist.png'
import SongHistoryImage from '../../../assets/images/adriantify/history.png'
import SongAdminImage from '../../../assets/images/adriantify/admin.png'

import AdrianTube2Main from '../../../assets/images/adrianTube2/AdrianTube2Main.png'
import ShortsImage from '../../../assets/images/adrianTube2/Shorts.png'
import CreatorVideosIamge from '../../../assets/images/adrianTube2/CreatorVideos.png'
import CommentImage from '../../../assets/images/adrianTube2/Comment.png'
import AddVideosImage from '../../../assets/images/adrianTube2/AddVideos.png'

// bookmania
import RegisterBookmaniaImage from '../../../assets/images/bookmania/register.png'
import HomeImage from '../../../assets/images/bookmania/home.png'
import ToursImage from '../../../assets/images/bookmania/tours.png'
import AgencyRequestImage from '../../../assets/images/bookmania/agencyrequest.png'
import UserImage from '../../../assets/images/bookmania/user.png'
import AgencyImage from '../../../assets/images/bookmania/agency.png'
import MapImage from '../../../assets/images/bookmania/map.png'
import MealsImage from '../../../assets/images/bookmania/meals.png'
import WaypointsImage from '../../../assets/images/bookmania/waypoints.png'
import DetailsImage from '../../../assets/images/bookmania/details.png'
import MapView from '../../../assets/images/bookmania/mapView.png'
import WeatherImage from '../../../assets/images/bookmania/weather.png'

// graphs 
import GraphsImage from '../../../assets/images/graphs/Grafy.png'
import GraphDetails from '../../../assets/images/graphs/GrafDetails.png'
import GenerateRaports from '../../../assets/images/graphs/GenerateRaports.png'
import GraphRaportPdf from '../../../assets/images/graphs/GraphRaportPdf.png'
import CompareGraphs from '../../../assets/images/graphs/CompareGraphs.png'
import SearchPath from '../../../assets/images/graphs/SearchPath.png'
import Tree from '../../../assets/images/graphs/Tree.png'
import { Project } from '../../../types'

export const projects: Project[] = [
    {
        username: 'GenWatt',
        repoName: 'AdrianAuthClient',
        images: [RegisterImage, ConfirmEmailImage],
        videos: [],
        tags: ['React', 'Typescript', 'Tanstack Query', 'Docker']
    },
    {
        username: 'GenWatt',
        repoName: 'AdrianAuthServer',
        images: [],
        videos: [],
        tags: ['Node', 'JWT', 'MongoDb', 'Docker']
    },
    {
        username: 'GenWatt',
        repoName: 'TerrainGames',
        images: [],
        videos: [],
        tags: ['React Native', 'Typescript', 'Node', 'MongoDb', 'CQRS', 'mapbox']
    }, {
        username: 'GenWattStudent',
        repoName: 'RTS_SINGLE_PLAYER',
        images: [],
        videos: [RTSVideo],
        tags: ['Unity', 'C#', 'Multiplayer', 'RTS', 'Lobby', 'Unity Relay']
    },
    {
        username: 'GenWatt',
        repoName: 'AdrianTube2',
        images: [AdrianTube2Main, ShortsImage, CreatorVideosIamge, CommentImage, AddVideosImage],
        videos: [],
        tags: ['Blazor Server', 'C#', 'MongoDb']
    },
    {
        username: 'GenWatt',
        repoName: 'Adriantify',
        images: [AdriantifySongsImage, ListenImage, ListenEverywhere, SearchSongImage, PlaylistImage, SongHistoryImage, SongAdminImage],
        videos: [],
        tags: ['Vue 3', 'Typescript', 'Node', 'MongoDb', 'Docker']
    },
    {
        username: 'GenWattStudent',
        repoName: 'Grafy',
        images: [GraphsImage, GraphDetails, GenerateRaports, GraphRaportPdf, CompareGraphs, SearchPath, Tree],
        videos: [],
        tags: ['Python', 'Tkinter', 'Graphs']
    },
    {
        username: 'GenWattStudent',
        repoName: 'Todo',
        images: [],
        videos: [],
        tags: ['React', 'Nginx', 'Node', 'MongoDb', 'Docker', 'Typescript', 'Material UI', 'Docker Compose', 'Redux Toolkit']
    },
    {
        username: 'GenWattStudent',
        repoName: 'Wycieczki---ASP.NET',
        images: [RegisterBookmaniaImage, HomeImage, ToursImage, AgencyRequestImage, UserImage, AgencyImage, MapImage, MealsImage, WaypointsImage, DetailsImage, MapView, WeatherImage],
        videos: [],
        tags: ['ASP.NET MVC', 'C#', 'MVC', 'Entity Framework', 'SQL Server', 'Bootstrap', 'JQuery', 'JavaScript', 'Redis', 'Azure', 'Three.js']
    }
]