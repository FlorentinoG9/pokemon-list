import * as React from 'react'
import { produce } from 'immer'
import { atom, useAtomValue } from 'jotai'
import { useDebounce } from 'use-debounce'

const SEARCH_DELAY = 500
export const searchQuery = atom('')

export default function useSearch<T extends object>(items: Array<T>) {
  const search = useAtomValue(searchQuery)

  const [searchValue] = useDebounce(search, SEARCH_DELAY)

  return React.useMemo(() => {
    if (!items) return []

    const filtered = produce<Array<T>>(items, (draft) => {
      return draft.filter((item) => {
        const values = Object.values(item)
        return values.some((value) => {
          if (typeof value === 'string') {
            return value.toLowerCase().includes(searchValue.toLowerCase())
          }

          return false
        })
      })
    })

    return filtered
  }, [items, searchValue])
}
