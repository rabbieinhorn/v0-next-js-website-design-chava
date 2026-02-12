'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

const formSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  roleTitle: z.string().min(2, 'Please enter your role or title'),
  companyIndustry: z.string().optional(),
  inflectionPoint: z.string().min(1, 'Please select an option'),
  urgentDecision: z.string().min(10, 'Please share more about your situation'),
  repeatingPattern: z.string().min(10, 'Please share more about the pattern'),
  psychiatristCare: z.enum(['yes', 'no'], {
    required_error: 'Please select an option',
  }),
  willingToPractice: z.enum(['yes', 'no'], {
    required_error: 'Please select an option',
  }),
  referralSource: z.string().min(2, 'Please share how you heard about Chava'),
  budgetAcknowledgement: z.literal(true, {
    errorMap: () => ({ message: 'Please acknowledge the investment requirement' }),
  }),
})

type FormValues = z.infer<typeof formSchema>

const inflectionOptions = [
  { value: 'leadership', label: 'Leadership transition / role change' },
  { value: 'relationship', label: 'Relationship / family decision' },
  { value: 'business', label: 'Business scale / exit / high-stakes decision' },
  { value: 'burnout', label: 'Burnout / chronic stress pattern' },
  { value: 'other', label: 'Other' },
]

export function RequestForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      roleTitle: '',
      companyIndustry: '',
      inflectionPoint: '',
      urgentDecision: '',
      repeatingPattern: '',
      referralSource: '',
    },
  })

  function onSubmit(data: FormValues) {
    console.log('Form submitted:', data)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="border-border">
        <CardContent className="flex flex-col items-center py-12 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary bg-primary/10">
            <CheckCircle className="h-6 w-6 text-primary" />
          </div>
          <h2 className="mt-6 font-serif text-xl font-medium text-foreground">
            Request received
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            If it's a fit, you'll hear back within 2 business days.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Contact Information */}
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Phone <span className="text-muted-foreground font-normal">(optional)</span>
                </FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="roleTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role / Title</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. CEO, Founder, Partner" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="companyIndustry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Company / Industry <span className="text-muted-foreground font-normal">(optional)</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Tech, Finance, Healthcare" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Situation Assessment */}
        <div className="space-y-6 pt-4">
          <FormField
            control={form.control}
            name="inflectionPoint"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Best description of your current inflection point</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {inflectionOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="urgentDecision"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What decision feels most urgent right now?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe the decision or situation you're facing..."
                    className="min-h-24 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="repeatingPattern"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What pattern keeps repeating?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe the pattern you've noticed..."
                    className="min-h-24 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Screening Questions */}
        <div className="space-y-6 pt-4">
          <FormField
            control={form.control}
            name="psychiatristCare"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>
                  Are you currently under the care of a psychiatrist or in active addiction treatment?
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-6"
                  >
                    <FormItem className="flex items-center gap-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel className="font-normal">Yes</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center gap-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormDescription>
                  If yes, this may not be the right fit.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="willingToPractice"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>
                  Are you willing to do daily practice between sessions (5–15 minutes/day)?
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-6"
                  >
                    <FormItem className="flex items-center gap-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel className="font-normal">Yes</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center gap-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Referral & Acknowledgement */}
        <div className="space-y-6 pt-4">
          <FormField
            control={form.control}
            name="referralSource"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How did you hear about Chava?</FormLabel>
                <FormControl>
                  <Input placeholder="Referral name or source" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="budgetAcknowledgement"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start gap-3 space-y-0 rounded-md border border-border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="font-normal">
                    I understand engagements begin at $15,000.
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>

        {/* Confidentiality Note */}
        <div className="rounded-md border border-[rgba(0,0,0,0.08)] bg-card px-4 py-3">
          <p className="text-xs text-[#5A5852]">
            <span className="font-medium text-foreground">Confidentiality:</span> All information submitted is held in strict confidence and will only be used to assess fit for engagement.
          </p>
        </div>

        <Button type="submit" size="lg" className="w-full">
          Submit Request
        </Button>
      </form>
    </Form>
  )
}
