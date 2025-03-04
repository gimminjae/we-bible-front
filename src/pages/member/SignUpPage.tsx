import { useState, useCallback, FormEvent, ChangeEvent, useEffect } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Checkbox from "@mui/material/Checkbox"
import Divider from "@mui/material/Divider"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormLabel from "@mui/material/FormLabel"
import FormControl from "@mui/material/FormControl"
import Link from "@mui/material/Link"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import MuiCard from "@mui/material/Card"
import { styled } from "@mui/material/styles"
import GoogleIcon from "@mui/icons-material/Google"
import useHeader from "../../hooks/useHeader"

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}))

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),
  },
}))

export default function SignUpPage(props: { disableCustomTheme?: boolean }) {
  const { setMenu } = useHeader()

  const [errors, setErrors] = useState({
    name: {
      error: false,
      message: "",
    },
    email: {
      error: false,
      message: "",
    },
    password: {
      error: false,
      message: "",
    },
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    allowExtraEmails: false,
  })

  const handleErrorChange = useCallback(
    (field: string, hasError: boolean, message: string) => {
      setErrors((prev: any) => ({
        ...prev,
        [field]: {
          error: hasError,
          message: message,
        },
      }))
    },
    []
  )

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value, type, checked } = event.target
      setFormData((prev: any) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }))
    },
    []
  )

  const validateInputs = useCallback(() => {
    let isValid = true

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      handleErrorChange("email", true, "Please enter a valid email address.")
      isValid = false
    } else {
      handleErrorChange("email", false, "")
    }

    if (!formData.password || formData.password.length < 6) {
      handleErrorChange(
        "password",
        true,
        "Password must be at least 6 characters long."
      )
      isValid = false
    } else {
      handleErrorChange("password", false, "")
    }

    if (!formData.name || formData.name.length < 1) {
      handleErrorChange("name", true, "Name is required.")
      isValid = false
    } else {
      handleErrorChange("name", false, "")
    }

    return isValid
  }, [formData, handleErrorChange])

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      if (errors.name.error || errors.email.error || errors.password.error) {
        return
      }
      console.log(formData)
    },
    [errors, formData]
  )

  useEffect(() => {
    setMenu(
      <>
        <div className="text-center">회원가입</div>
      </>
    )
  }, [])

  return (
    <SignUpContainer direction="column" justifyContent="space-between">
      <Card variant="outlined">
        <Typography
          component="h1"
          variant="h4"
          sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
        >
          Sign up
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <FormControl>
            <FormLabel htmlFor="name">Full name</FormLabel>
            <TextField
              autoComplete="name"
              name="name"
              required
              fullWidth
              id="name"
              placeholder="Jon Snow"
              error={errors.name.error}
              helperText={errors.name.message}
              color={errors.name.error ? "error" : "primary"}
              value={formData.name}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              required
              fullWidth
              id="email"
              placeholder="your@email.com"
              name="email"
              autoComplete="email"
              variant="outlined"
              error={errors.email.error}
              helperText={errors.email.message}
              color={errors.email.error ? "error" : "primary"}
              value={formData.email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <TextField
              required
              fullWidth
              name="password"
              placeholder="••••••"
              type="password"
              id="password"
              autoComplete="new-password"
              variant="outlined"
              error={errors.password.error}
              helperText={errors.password.message}
              color={errors.password.error ? "error" : "primary"}
              value={formData.password}
              onChange={handleInputChange}
            />
          </FormControl>
          {/* <FormControlLabel
            control={
              <Checkbox
                name="allowExtraEmails"
                checked={formData.allowExtraEmails}
                onChange={handleInputChange}
                color="primary"
              />
            }
            label="I want to receive updates via email."
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={validateInputs}
          >
            Sign up
          </Button>
        </Box>
        <Divider>
          {/* <Typography sx={{ color: "text.secondary" }}>or</Typography> */}
        </Divider>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => alert("Sign up with Google")}
            startIcon={<GoogleIcon />}
          >
            <Typography>Sign up with Google</Typography>
          </Button>
          <Typography sx={{ textAlign: "center" }}>
            Already have an account?{" "}
            <Link
              href="/material-ui/getting-started/templates/sign-in/"
              variant="body2"
              sx={{ alignSelf: "center" }}
            >
              Sign in
            </Link>
          </Typography>
        </Box>
      </Card>
    </SignUpContainer>
  )
}
