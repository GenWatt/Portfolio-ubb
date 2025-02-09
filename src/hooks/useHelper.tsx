import { useTheme } from "@mui/material"
import { useEffect, useState } from "react"

function useHelper() {
    const theme = useTheme()
    const [isMobile, setIsMobile] = useState(window.innerWidth < theme.breakpoints.values.sm)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < theme.breakpoints.values.sm)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [theme.breakpoints.values.sm])

    function getViewHeight() {
        const appBarEl = document.getElementById('AppBar')
        const footerEl = document.getElementById('Footer')
        const mainEl = document.getElementsByTagName('main')[0]
        const appBarHeight = appBarEl ? appBarEl.clientHeight : 0
        const footerHeight = footerEl ? footerEl.clientHeight : 0
        const mainPaddingY = mainEl ? parseInt(window.getComputedStyle(mainEl).paddingTop) + parseInt(window.getComputedStyle(mainEl).paddingBottom) : 0

        return window.innerHeight - appBarHeight - footerHeight - mainPaddingY
    }

    function getViewWidth() {
        const drawerEl = document.getElementById('Drawer')
        const mainEl = document.getElementsByTagName('main')[0]
        const drawerWidth = drawerEl && !isMobile ? drawerEl.clientWidth : 0
        const mainPaddingX = mainEl ? parseInt(window.getComputedStyle(mainEl).paddingLeft) + parseInt(window.getComputedStyle(mainEl).paddingRight) : 0

        return window.innerWidth - drawerWidth - mainPaddingX - 1
    }

    return { getViewHeight, getViewWidth, isMobile }
}

export default useHelper