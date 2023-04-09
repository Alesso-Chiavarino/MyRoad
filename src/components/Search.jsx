import { useMemo, useState } from 'react'
import { createAutocomplete } from '@algolia/autocomplete-core'

const Search = (props) => {

    const [autocompleteState, setAutocompleteState] = useState({
        collections: [],
        isOpen: false
    })

    const autocomplete = useMemo(() => createAutocomplete({
        onStateChange: ({ state }) => {
            setAutocompleteState(state)
        },
        getSources: () => [
            {
                sourceId: 'users',
                getItems: ({ query }) => {
                    if (!!query) {
                        return fetch(`/api/user/search?q=${query}`)
                            .then((res) => res.json())
                    }
                }
            }
        ],
        ...props
    }), [props])

    return (
        <div className='bg-gray-300 rounded-full p-[1px] text-gray-300' >
            <form action="">
                <input className='px-4 py-1 rounded-full bg-[#171717] outline-none' type="text" placeholder="Search user..." />
            </form>
        </div >
    )
}

export default Search