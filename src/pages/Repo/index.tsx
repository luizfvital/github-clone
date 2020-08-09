import React from 'react'
import { Link } from 'react-router-dom'

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StatIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles'

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className="username" to="/luizfvital">
          luizfvital
        </Link>

        <span>/</span>

        <Link className="reponame" to="/luizfvital/github-clone">
          github-clone
        </Link>
      </Breadcrumb>

      <p>Github clone.</p>

      <Stats>
        <li>
          <StatIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href="https://github.com/luizfvital/github-clone">
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  )
}

export default Repo
