# Tarea hw-04 - Deployment con Vite, GitHub Actions y CloudFront
## URL del CDN
djd9pmlo18o4q.cloudfront.net
## Descripcion
Pagina estatica creada con Vite y desplegada automaticamente a un bucket
de S3 distribuido por CloudFront mediante GitHub Actions.
## Pipeline
1. Build: npm ci + npm run build
2. Upload: aws s3 sync dist/ al bucket
3. Invalidate: invalidacion de cache de CloudFront (/*)
