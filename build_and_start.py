import os

print("Running build...")
os.system('docker build -t grafana .')
print("\n Starting app")
os.system("docker run -dp 3000:3000 grafana")