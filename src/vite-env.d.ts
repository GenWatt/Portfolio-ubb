/// <reference types="vite/client" />

import { string } from "three/examples/jsm/nodes/Nodes.js"

interface ImportMetaEnv {
    readonly VITE_MODE: string
    readonly VITE_TEMPLATE_ID: string
    readonly VITE_SERVICE_ID: string
    readonly VITE_USER_ID: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}