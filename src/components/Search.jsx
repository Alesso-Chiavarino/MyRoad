import { useMemo, useState, useRef } from 'react'
import { createAutocomplete } from '@algolia/autocomplete-core'
import Link from 'next/link'


const AutocompleteItem = ({ username, name, avatar_url }) => {
    return (
        <li className='p-2 text-gray-300 hover:bg-gray-700 rounded-lg cursor-pointer' >
            <Link href={`/${username}`} className='flex items-center' >
                <div className='w-10 h-10 rounded-full overflow-hidden bg-gray-500 mr-3' >
                    <img className='w-full h-full object-cover' src={avatar_url.url} alt={name} />
                </div>
                <div className='flex flex-col' >
                    <span className='text-sm font-medium' >{name}</span>
                    <span className='text-xs text-gray-400' >@{username}</span>
                </div>
            </Link>
        </li>
    )
}


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
        placeholder: 'Search users',
        ...props,
    }), [props])

    const formRef = useRef(null)
    const inputRef = useRef(null)
    const panelRef = useRef(null)

    const formProps = autocomplete.getFormProps({
        inputElement: inputRef.current
    })

    const inputProps = autocomplete.getInputProps({
        inputElement: inputRef.current
    })

    return (
        <div className='bg-[#B8BFC6]/50 rounded-lg p-[0.8px] text-gray-300' >
            <form ref={formRef} {...formProps}>
                <input ref={inputRef} {...inputProps} className='px-4 rounded-lg bg-[#171717] outline-none' />
            </form>
            {autocompleteState.isOpen && (
                <div className='absolute rounded-lg shadow-lg' ref={panelRef} {...autocomplete.getPanelProps()} >
                    {autocompleteState.collections.map((collection, index) => {
                        const { items } = collection
                        return (
                            <div key={index} className='relative top-2 bg-[#171717] rounded-lg w-fit' >
                                {items.length > 0 && (
                                    <ul {...autocomplete.getListProps()} className='w-fit' >
                                        {items.map((item, index) => <AutocompleteItem key={index} {...item} />)}
                                    </ul>
                                )}
                            </div>
                        )
                    })}
                </div>
            )}

        </div >
    )
}

export default Search