
function useHelper() {
    function getViewHeight() {
        const appBarEl = document.getElementById('AppBar')
        const footerEl = document.getElementById('Footer')
        const mainEl = document.getElementsByTagName('main')[0]
        const appBarHeight = appBarEl ? appBarEl.clientHeight : 0
        const footerHeight = footerEl ? footerEl.clientHeight : 0
        const mainPaddingY = mainEl ? parseInt(window.getComputedStyle(mainEl).paddingTop) + parseInt(window.getComputedStyle(mainEl).paddingBottom) : 0

        return window.innerHeight - appBarHeight - footerHeight - mainPaddingY
    }

    return { getViewHeight }
}

export default useHelper