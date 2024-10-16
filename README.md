# register 프로필사진 등록변경

- [ ] utiles로 resizeFile 이동

```diff
- const [photoUrl, setPhotoUrl] = useState("");
 const [photoBase64, setPhotoBase64] = useState("");

 const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const image = await resizeFile(file);
        // setResizedImage(image);
        setPhotoBase64(image);
      } catch (err) {
        console.log(err);
      }
    }
  };
```

###

```tsx
 const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/register", {
        name,
        email,
        password,
-       photoUrl,
+       photoBase64,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };
```

### 유저 이미지 클릭으로 프로필이미지 파일 가져오기

`htmlFor="file"`를 사용해 input가 없이 파일가져오기를 구현한다.

```tsx
<div className="flex flex-col justify-center items-center relative">
  <label htmlFor="file">
    <Image
      src={user}
      className="rounded-full  my-8  border"
      style={{
        width: "120px",
        height: "120px",
        backgroundSize: "cover",
      }}
      alt=""
    />
  </label>
  {photoBase64 && (
    <button
      className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => setPhotoBase64(undefined)}
    >
      삭제
    </button>
  )}

  <input
    style={{ display: "none" }}
    type="file"
    id="file"
    onChange={handleFileChange}
    accept="image/*"
  />
  {photoBase64 && (
    <div
      className="absolute rounded-full border top-[32px]"
      style={{
        width: "120px",
        height: "120px",
        backgroundImage: `url(${photoBase64})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  )}
</div>
```
