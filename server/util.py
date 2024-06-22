import json
import pickle

__locations = None
__area_types = None
__categorical = None
__model = None
__column_transformer = None


def estimate_price(house_area_type, house_location, sqft, number_of_bathroom, number_of_balcony,
                   number_of_bedroom):
    return round(__model.predict(__column_transformer.transform(
        [[house_area_type, house_location, sqft, number_of_bathroom, number_of_balcony, number_of_bedroom]]))[0], 2)


def get_categorical():
    return __locations, __area_types


def load_artifacts():
    print("Loading saved artifacts")
    global __locations
    global __categorical
    global __area_types
    global __model
    global __column_transformer

    with open("./artifacts/artifacts.json") as f:
        __categorical = json.load(f)
        __locations = __categorical["locations"]
        __area_types = __categorical["area_type"]

    with open("./artifacts/model.pickle", 'rb') as f:
        __model = pickle.load(f)

    with open("./artifacts/column_transformer.pickle", 'rb') as f:
        __column_transformer = pickle.load(f)

    print("Loaded saved artifacts")


if __name__ == '__main__':
    load_artifacts()
    locations, area_types = get_categorical()
    print(locations)
    print(area_types)
    print(estimate_price('Built-up  Area', '7th Phase JP Nagar', 1580.0, 2.0, 2.0, 6))
    print(estimate_price('Built-up  Area', 'other', 1000, 2.0, 2, 3.0))
