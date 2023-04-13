'use client'

import { useEffect, useState } from 'react'

// eslint-disable-next-line prettier/prettier
export const useFilter = (users) => {
  const [filteredUsers, setFilteredUsers] = useState(users)
  const [searchQuery, setSearchQuery] = useState('')
  const [roleFilters, setRoleFilters] = useState([])
  const [skillFilters, setSkillFilters] = useState([])
  const [expYearsFilter, setExpYearsFilter] = useState(null)

  useEffect(() => {
    let filtered = users.filter(user => {
      if (
        searchQuery &&
        !user.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false
      }

      if (
        roleFilters.length > 0 &&
        !roleFilters.every(role => user.roles.includes(role))
      ) {
        return false
      }

      if (
        skillFilters.length > 0 &&
        !skillFilters.every(skill => user.skills.includes(skill))
      ) {
        return false
      }

      if (expYearsFilter && user.yearsOfExp < expYearsFilter) {
        return false
      }

      return true
    })

    setFilteredUsers(filtered)
  }, [users, searchQuery, roleFilters, skillFilters, expYearsFilter])

  const handleSearchChange = e => {
    setSearchQuery(e.target.value)
  }

  const handleRoleFilterChange = e => {
    setRoleFilters([e.target.value])
  }

  const handleSkillFilterChange = e => {
    setSkillFilters([e.target.value])
  }

  const handleExpYearsFilterChange = e => {
    setExpYearsFilter(e.target.value)
  }

  return {
    filteredUsers,
    searchQuery,
    handleSearchChange,
    roleFilters,
    handleRoleFilterChange,
    skillFilters,
    handleSkillFilterChange,
    expYearsFilter,
    handleExpYearsFilterChange,
  }
}
