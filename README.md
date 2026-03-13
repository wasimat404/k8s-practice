# 🚀 BMI Calculator – Kubernetes Deployment on AWS EC2 (Minikube)

A simple **BMI Calculator Web App** containerized with **Docker**, deployed on **Kubernetes (Minikube)** inside **AWS EC2**, exposed via **Kubernetes Service + Port Forwarding**, and visualized with **Kubeshark**.

------------------------------------------------------------

📁 PROJECT STRUCTURE

bmi-k8s-app
│
├── Dockerfile
├── deployment.yaml
├── service.yaml
└── app
    ├── index.html
    └── script.js

------------------------------------------------------------

⚙️ DEPLOYMENT WORKFLOW

Start cluster
minikube start

Build image
docker build -t bmi-app .

Load image to cluster
minikube image load bmi-app

Deploy app
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

Verify
kubectl get pods
kubectl get svc

------------------------------------------------------------

🌐 ACCESS APPLICATION (FROM EC2)

Forward service

kubectl port-forward --address 0.0.0.0 service/bmi-service 8080:80

Open in browser

http://EC2_PUBLIC_IP:8080

------------------------------------------------------------

☁️ AWS EC2 SECURITY GROUP (INBOUND RULES)

22 → SSH  
8080 → Application access  
8899 → Kubeshark dashboard  
30000‑32767 → Kubernetes NodePort range  

------------------------------------------------------------

🌐 NETWORK FLOW

Browser
   │
   ▼
AWS EC2 Public IP
   │
   ▼
kubectl port-forward
   │
   ▼
Kubernetes Service (bmi-service)
   │
   ▼
kube-proxy Load Balancer
   │
   ├── Pod 1 → Nginx → BMI App
   │
   └── Pod 2 → Nginx → BMI App

Traffic is **automatically load balanced across pods**.

------------------------------------------------------------

🔎 NETWORK OBSERVABILITY (KUBESHARK)

Install
curl -Lo kubeshark https://github.com/kubeshark/kubeshark/releases/latest/download/kubeshark_linux_amd64
chmod +x kubeshark
sudo mv kubeshark /usr/local/bin/

Start capture
kubeshark tap --proxy-host 0.0.0.0

Open UI
http://EC2_PUBLIC_IP:8899

Kubeshark shows:
Browser → Service → Pod → Nginx → Response

------------------------------------------------------------

🧠 CONCEPTS DEMONSTRATED

Docker Containerization  
Kubernetes Deployment  
Replica Pods  
Kubernetes Service Networking  
Load Balancing  
AWS EC2 Networking  
Port Forwarding  
Kubernetes Traffic Observability  

------------------------------------------------------------

👨‍💻 Wasim Akram – DevOps Kubernetes Practice
