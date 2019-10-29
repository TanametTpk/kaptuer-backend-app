import ReactGA from 'react-ga'

export const initGA = () => {
  ReactGA.initialize('UA-150820819-1')
}

export const pageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search)
}

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}