'use client'

import { useState, useEffect, useCallback } from 'react'
import { getUser } from '@/services/posts'  // ou '@/services/users'

export function useUsers(userIds = []) {
  const [users, setUsers]     = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState(null)

  const loadUsers = useCallback(async () => {
    if (!userIds.length) return

    setLoading(true)
    setError(null)

    try {
      // pega só IDs únicos
      const uniqueIds = Array.from(new Set(userIds))

      // busca todos de uma vez
      const results = await Promise.all(
        uniqueIds.map(id => getUser(id))
      )

      // transforma em um map { [id]: user }
      const map = results.reduce((acc, user) => {
        acc[user.id] = user
        return acc
      }, {})

      setUsers(map)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [userIds])

  useEffect(() => {
    loadUsers()
  }, [loadUsers])

  return { users, loading, error, reload: loadUsers }
}
