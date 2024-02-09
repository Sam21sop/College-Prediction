import pandas as pd
import os

# Specify the folder path that containing csv files 
folder_path = 'E:\GitHub\College-Prediction\College-Prediction\Data-Sets\CSV'



# List all files in the folder 
files = os.listdir(folder_path)

# Create empty dataframe
df = pd.DataFrame()

# Iterate through each csv file
for file in files:
    # Read the csv file into dataframes
    df_temp = pd.read_csv(os.path.join(folder_path, file))

    #  concate the dataframe with empty dataframe
    df = pd.concat([df, df_temp], ignore_index=True)


df.head(20)

# Save the concatenated Dataframe into new csv files
df.to_csv('output.csv', index=True)
