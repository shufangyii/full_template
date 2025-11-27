FROM rust:latest AS builder

WORKDIR /app

# Copy entire monorepo (simplest for now, can be optimized with cargo-chef or similar later)
COPY . .

# Build the service
# Assuming the service is a workspace member or standalone. 
# We target the specific package if it's in a workspace.
WORKDIR /app/apps/service
RUN cargo build --release

FROM debian:bookworm-slim AS runner

WORKDIR /app

# Install necessary runtime dependencies (e.g. OpenSSL) if needed
RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

# Copy binary
COPY --from=builder /app/apps/service/target/release/service ./service

CMD ["./service"]
