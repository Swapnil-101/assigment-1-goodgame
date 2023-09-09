import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const BeerListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BeerCard = styled.div`
  width: calc(33.33% - 20px);
  border: 1px solid #ddd;
  padding: 20px;
  margin: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #f8f8f8;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    background-color: #fff;
  }

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 480px) {
    width: calc(100% - 20px);
  }
`;

const BeerImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 200px;
  margin-bottom: 20px;
  border-radius: 8px;
`;

const BeerTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const BeerDescription = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.4;
`;

const BeerDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const BeerInfo = styled.span`
  background-color: #333;
  color: #fff;
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 20px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const BeerList = () => {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get(
          `https://api.punkapi.com/v2/beers?page=${page}&per_page=9`
        );
        setBeers((prevBeers) => [...prevBeers, ...response.data]);
      } catch (error) {
        console.error("Error fetching beers:", error);
      }
    };

    fetchBeers();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  return (
    <BeerListContainer>
      {beers.map((beer) => (
        <BeerCard key={beer.id}>
          <BeerImage src={beer.image_url} alt={beer.name} />
          <BeerTitle>{beer.name}</BeerTitle>
          <BeerDescription>{beer.description}</BeerDescription>
          <BeerDetails>
            <BeerInfo>ABV: {beer.abv}%</BeerInfo>
            <BeerInfo>IBU: {beer.ibu}</BeerInfo>
          </BeerDetails>
          <a
            href={beer.tagline}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "auto",
              textDecoration: "none",
              backgroundColor: "#333",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Learn More
          </a>
        </BeerCard>
      ))}
    </BeerListContainer>
  );
};

export default BeerList;
