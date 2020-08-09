import React from 'react'

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab,
} from './styles'

import RandomCalendar from '../../components/RandomCalendar'
import ProfileData from '../../components/ProfileData'
import RepoCard from '../../components/RepoCard'

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">21</span>
    </div>
  )

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>

        <span className="line" />
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            username="luizfvital"
            name="Luiz Fernando"
            avatarUrl="https://avatars1.githubusercontent.com/u/30935322?v=4"
            followers={887}
            following={7}
            company="Moben"
            location="Sao Paulo, Brazil"
            email="luizfvital@gmail.com"
            blog={undefined}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>

          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard
                  key={n}
                  username="luizfvital"
                  reponame="content"
                  description="description"
                  language={n % 3 === 0 ? 'JavaScript' : 'Typescript'}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random Calendar (it does not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  )
}

export default Profile
