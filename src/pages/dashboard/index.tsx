import { useEffect, useState } from 'react'

import { Div } from './styles'

export default function Home() {
  useEffect(() => {
    getVisitors()
  }, [])

  async function getVisitors() {
    let response = await fetch(
      `https://api.countapi.xyz/hit/brenoalvimvercel/0af962d2-6393-494c-927d-d2adf19ffb5c`
    )
    let respondeJson = await response.json()

    insertVisitorsEUA(respondeJson.value)

    response = await fetch(
      `https://api.countapi.xyz/hit/brenoalvimvercelbr/51176c51-44c2-40fa-a2fe-175d043f4bb1`
    )

    respondeJson = await response.json()

    insertVisitorsBR(respondeJson.value)
  }

  async function insertVisitorsEUA(visitors: number) {
    const documentEUA: HTMLElement = document.querySelector('.visitorsEUA')

    documentEUA.innerHTML = ` `
    documentEUA.innerHTML += ` ` + visitors
  }

  async function insertVisitorsBR(visitors: number) {
    const documentBR: HTMLElement = document.querySelector('.visitorsBR')

    documentBR.innerHTML = ` `
    documentBR.innerHTML += `` + visitors
  }
  return (
    <>
      <Div>
        <section className="page-contain">
          <a href="#" className="data-card">
            <h3 className="visitorsEUA"></h3>
            <h4>Visitantes EUA</h4>
            <p>{/* Hover Effect */}</p>
            {/* <span className="link-text">
              View All Providers
              <svg
                width="25"
                height="16"
                viewBox="0 0 25 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
                  fill="#753BBD"
                />
              </svg>
            </span> */}
          </a>
          <a href="#" className="data-card">
            <h3 className="visitorsBR"></h3>
            <h4>Visitantes BR</h4>
            <p>
              {/* 
                Hover Effect */}
            </p>
            {/* <span className="link-text">
              View Information
              <svg
                width="25"
                height="16"
                viewBox="0 0 25 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
                  fill="#753BBD"
                />
              </svg>
            </span> */}
          </a>
        </section>
      </Div>
    </>
  )
}
