const CameraComponent = () => {
  const videoRef = useRef(null);
  const [facingMode, setFacingMode] = useState("user");

  useEffect(() => {
    const startVideo = async () => {
      try {
        const constraints = { video: { facingMode } };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    startVideo();
  }, [facingMode]);

  const toggleCamera = () => {
    setFacingMode((prevFacingMode) =>
      prevFacingMode === "user" ? "environment" : "user"
    );
  };

  return (
    <div>
      <video style={{ width: "400px", height: "300px", borderRadius: "90%" }} ref={videoRef} autoPlay></video>
      <button onClick={toggleCamera}>Toggle Camera</button>
      <button onClick={() => setFacingMode("user")}>Front Camera</button>
      <button onClick={() => setFacingMode("environment")}>Back Camera</button>
    </div>
  );
};