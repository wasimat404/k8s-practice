🚀 BMI Calculator – Kubernetes Deployment on AWS EC2

APP STACK
HTML + JavaScript → Nginx → Docker → Kubernetes → Minikube → AWS EC2

------------------------------------------------------------

📦 PROJECT STRUCTURE

bmi-k8s-app
│
├── Dockerfile
├── deployment.yaml
├── service.yaml
└── app
    ├── index.html
    └── script.js


------------------------------------------------------------

⚙️ WORKFLOW

1️⃣ Build Docker Image
docker build -t bmi-app .

2️⃣ Load image to Minikube
minikube image load bmi-app

3️⃣ Deploy to Kubernetes
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

4️⃣ Access from Internet
kubectl port-forward --address 0.0.0.0 service/bmi-service 8080:80

Open:
http://EC2_PUBLIC_IP:8080


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
Kubernetes Service (LoadBalancer)
   │
   ▼
kube-proxy
   │
   ▼
 ┌─────────────┐
 │ Pod 1       │
 │ BMI App     │
 └─────────────┘
       │
 ┌─────────────┐
 │ Pod 2       │
 │ BMI App     │
 └─────────────┘


------------------------------------------------------------

🔍 OBSERVABILITY (Kubeshark)

Install
curl -Lo kubeshark https://github.com/kubeshark/kubeshark/releases/latest/download/kubeshark_linux_amd64

Run
kubeshark tap --proxy-host 0.0.0.0

Open UI
http://EC2_PUBLIC_IP:8899


------------------------------------------------------------

☁️ AWS SECURITY GROUP

Allow inbound ports:

22     → SSH
8080   → App access
8899   → Kubeshark UI
30000-32767 → NodePort range


------------------------------------------------------------

🎯 KEY KUBERNETES CONCEPTS

• Docker Containerization
• Kubernetes Deployment
• Replica Pods
• Kubernetes Service
• Load Balancing
• Port Forwarding
• Cluster Observability
