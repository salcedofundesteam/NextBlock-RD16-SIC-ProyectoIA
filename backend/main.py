from fastapi import FastAPI, HTTPException
from Services.preparing_final_data import getData

app = FastAPI()


# root
@app.get("/")
def root():
    return {"message": "This is the root"}


# get all
@app.get("/api/all")
def get_all():
    data = getData()
    return data
