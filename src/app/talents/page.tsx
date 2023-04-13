'use client'

import { useFilter } from '../hooks/useFilter'

const pepe = [
  {
    id: 1,
    name: 'John Smith',
    roles: ['developer', 'designer'],
    skills: ['React', 'Node.js', 'UI design'],
    yearsOfExp: 5,
  },
  {
    id: 2,
    name: 'Mary Jones',
    roles: ['developer'],
    skills: ['Angular', 'MongoDB'],
    yearsOfExp: 3,
  },
  {
    id: 3,
    name: 'Bob Johnson',
    roles: ['UI/UX Designer'],
    skills: ['Photoshop', 'Illustrator', 'CSS'],
    yearsOfExp: 7,
  },
  {
    id: 4,
    name: 'Sara Lee',
    roles: ['Backend Developer'],
    skills: ['JavaScript', 'HTML', 'CSS'],
    yearsOfExp: 2,
  },
  {
    id: 5,
    name: 'David Kim',
    roles: ['Fullstack Developer', 'manager'],
    skills: ['React', 'Python', 'Project management'],
    yearsOfExp: 8,
  },
  {
    id: 6,
    name: 'Alice Chang',
    roles: ['Frontend Developer', 'Project Manager'],
    skills: ['Sketch', 'InVision', 'Team management'],
    yearsOfExp: 6,
  },
]
const roles = [
  'Frontend Developer',
  'Backend Developer',
  'Fullstack Developer',
  'DevOps Engineer',
  'UI/UX Designer',
  'Project Manager',
]
const skills = [
  'React',
  'Angular',
  'Vue',
  'Node.js',
  'Express.js',
  'MongoDB',
  'PostgreSQL',
  'AWS',
  'Docker',
  'Kubernetes',
  'Adobe Photoshop',
  'Figma',
]

const expYears = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function Talent() {
  const {
    filteredUsers,
    searchQuery,
    handleSearchChange,
    roleFilters,
    handleRoleFilterChange,
    skillFilters,
    handleSkillFilterChange,
    expYearsFilter,
    handleExpYearsFilterChange,
  } = useFilter(pepe)

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search users"
      />

      <div>
        <label>Filter by role:</label>
        <select
          multiple={false}
          value={roleFilters}
          onChange={handleRoleFilterChange}
        >
          <option value="">Select years of experience</option>
          {roles.map(role => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Filter by skill:</label>
        <select
          multiple={false}
          value={skillFilters}
          onChange={handleSkillFilterChange}
        >
          <option value="">Select years of experience</option>
          {skills.map(skill => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Filter by years of experience:</label>
        <select
          multiple={false}
          value={expYearsFilter}
          onChange={handleExpYearsFilterChange}
        >
          <option value="">Select years of experience</option>
          {expYears.map(years => (
            <option key={years} value={years}>
              {years}
            </option>
          ))}
        </select>
      </div>

      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
