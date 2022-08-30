# World Generator

This section will help you setup the world generator so that you can create custom biomes and planets for your minecraft world

## Step. 1: Clone the repository

Clone the repository

```powershell
git clone https://github.com/FrederoxDev/Cosmos-Generation.git
```

Change into the new directory

```powershell
cd Cosmos-Generation
```

## Step. 2: Download Python

Install the latest version of Python then run:

```powershell
pip install amulet-core
pip install load-bar
```

## Step. 3: Generate World

1. Create a world inside of minecraft
2. Activate RP & BP and all experimental toggles
3. Navigate to your `com.mojang` folder and cut the worlds folder
4. Paste the worlds folder inside of the generator scripts folder
5. Rename world folder to `world`

```powershell
python Main.py
```

6. After the script has finished running, copy the folder back into `com.mojang`