import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";

import { listPokedex } from "../store/modules/pokedex/pokedexSlice";
import { useNavigate } from "react-router-dom";
import { LikeIcon } from "../components/LikeIcon";
import { useAppSelector } from "../store/hook";

export function Pokedex() {
  const pokedex = useAppSelector((state) => listPokedex(state.pokedex));

  if (!pokedex) {
    return <div>Loading...</div>;
  }

  const navigate = useNavigate();

  return (
    <Box component={"main"}>
      <Container
        sx={{
          width: "100%",
          maxWidth: "100%",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Stack
          direction={"row"}
          sx={{ minWidth: "100%" }}
          justifyContent={"center"}
          mt={9}
        >
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ width: "100%" }}
            justifyContent={"center"}
          >
            {pokedex.length > 0 ? (
              pokedex.map((pokemon) => (
                <Grid
                  item
                  sm={6}
                  md={4}
                  lg={3}
                  key={pokemon.id}
                  width={"18rem"}
                >
                  <Card sx={{ minWidth: "80%" }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        sx={{ width: "auto", margin: "0 auto", mt: "1rem" }}
                        image={pokemon.image}
                        alt={pokemon.name}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          textAlign={"center"}
                          fontWeight={"bolder"}
                        >
                          {pokemon.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Size: {pokemon.size} KG
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <LikeIcon pokemon={pokemon} />
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography fontSize={"1.5rem"} textAlign={"center"}>
                Você ainda não tem nenhum Pokemon favorito,<br></br> mas{" "}
                <Link
                  onClick={() => navigate("/pokemon")}
                  sx={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "#383838",
                    "&:hover": {
                      color: "#555555",
                    },
                  }}
                >
                  clique aqui
                </Link>{" "}
                para ir até a página e adicionar.
              </Typography>
            )}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
