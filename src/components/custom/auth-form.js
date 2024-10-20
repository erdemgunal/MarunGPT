import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export function AuthForm({ action, children, defaultEmail }) {
  return (
    <form onSubmit={action} className="flex flex-col gap-4 px-4 sm:px-16">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            id="email"
            type="email"
            defaultValue={defaultEmail}
            required
            className="text-md md:text-sm"
            placeholder="Enter your email address"
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            id="password"
            type="password"
            required
            className="text-md md:text-sm"
            placeholder="Enter your password"
          />
        </div>
      </div>
      {children}
    </form>
  )
}