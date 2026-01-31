import os
import time

SERVICE_NAME = os.getenv("SERVICE_NAME", "optimobility-worker")
POLL_INTERVAL = int(os.getenv("POLL_INTERVAL", "10"))


def main() -> None:
    print(f"{SERVICE_NAME} starting")
    while True:
        # Placeholder for future Python data/ML jobs.
        print("worker heartbeat")
        time.sleep(POLL_INTERVAL)


if __name__ == "__main__":
    main()
