import React from 'react'

function useFormat() {
    function formatDate(date: string): string {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
    }

    return { formatDate }
}

export default useFormat