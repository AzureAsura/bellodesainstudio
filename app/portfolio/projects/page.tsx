import Pagination from '@/components/Pagination'
import HeroProjects from '@/components/portofolio/projects/HeroProjects'
import Listings from '@/components/portofolio/projects/Listings'
import SearchBar from '@/components/SearchBar'
import Tes from '@/components/Tes'
import React from 'react'

const page = () => {
  return (
    <>
        <HeroProjects/>
        <SearchBar/>
        <Listings/>
        <Pagination/>
        <Tes/>
    </>
  )
}

export default page